var feedbackProps = {
    feedbackFixedClassName: 'feedback-fixed',
    feedbackDisabledClassName: 'vote-disabled',
    feedbackFormSelector: '.feedback-row',
    feedbackMoreInfoSelector: '.feedback-more-info',
    isVoting: false,
    isClosed: false
};

$(document).ready(function () {

    var localStorageFeedbackKey = function () {
        return 'T_DOCUMENTATION_FEEDBACK_SUBMIT' + window.location.href;
    };

    var localStorageFeedbackSnoozeKey = function () {
        return 'T_DOCUMENTATION_FEEDBACK_SNOOZE_' + prd;
    };

    var isSnoozed = function (){
        var snoozeDate = localStorage.getItem(localStorageFeedbackSnoozeKey());
        if (snoozeDate){
            snoozeDate = new Date(snoozeDate);
            var isValidDate = !isNaN(snoozeDate.getTime());
            
            function areDatesOnSameDay(first, second){
               return first.getFullYear() === second.getFullYear() &&
                first.getMonth() === second.getMonth() &&
                first.getDate() === second.getDate();
            }
        
            if(isValidDate && areDatesOnSameDay(snoozeDate, new Date())){
                return true;
            }
        }

        return false;
    } 

    var getFeedbackInfo = function () {
        return localStorage.getItem(localStorageFeedbackKey());
    };

    var setFeedbackInfo = function (vote, closed) {
        var feedbackInfo = getFeedbackInfo();

        if (feedbackInfo) {
            var currentFeedbackInfo = JSON.parse(feedbackInfo);
            if (!vote) {
                vote = currentFeedbackInfo.vote;
            }
            if (closed === undefined || closed === null) {
                closed = currentFeedbackInfo.closed;
            }

        }

        feedbackInfo = {
            date: new Date(),
            vote: vote,
            closed: closed,
            url: window.location.href
        };

        localStorage.setItem(localStorageFeedbackKey(), JSON.stringify(feedbackInfo));

        submitToAnalytics(closed && !vote ? 'close' : vote);
    };

    var canVote = function () {
        var previousVote = getFeedbackInfo();
        if (previousVote) {
            var previousVoteData = JSON.parse(previousVote);
            if (previousVoteData.url === window.location.href && previousVoteData.vote !== null) {
                // You can vote once per week for an article.
                return Math.abs(new Date() - new Date(previousVoteData.date)) / 1000 / 60 / 60 >= 168;
            }
        }

        return true;
    };

    var getCookieByName = function (name) {
        var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
        if (match) return match[1];
    };

    var onAfterVote = function () {
        setTimeout(function () {
            $('.feedback').html("<div class='side-title uppercase-clear'>Thank you for your feedback!</div>");
        }, 200);

        setTimeout(function () {
            $(feedbackProps.feedbackFormSelector).removeClass(feedbackProps.feedbackFixedClassName);
            $(feedbackProps.feedbackFormSelector).addClass('vote-hide');
        }, 2000)
    };

    var scrollToFeedbackForm = function () {
        var $window = $(window);
        var $feedbackForm = $(feedbackProps.feedbackFormSelector);
        var verticalOffset = $feedbackForm.offset().top + $feedbackForm.outerHeight() - ($window.height() + $window.scrollTop());
        if (verticalOffset >= 0) {
            window.scrollTo({
                left: $window.scrollLeft(),
                top: $window.scrollTop() + verticalOffset,
                behavior: 'smooth'
            });
        }
    }

    var getFeedbackComment = function () {
        return $('#feedback-other-text-input').val().trim();
    }

    var getFeedbackData = function () {
        var otherFeedbackText = getFeedbackComment();
        return {
            email: "",
            inaccurateContent: false,
            inaccurateOutdatedContentText: "",
            otherMoreInformation: false,
            otherMoreInformationText: "",
            textErrors: false,
            typosLinksElementsText: "",
            outdatedSample: false,
            inaccurateOutdatedCodeSamplesText: "",
            acceptFeedbackContact: false,
            otherFeedback: otherFeedbackText !== "",
            textFeedback: otherFeedbackText,
            yesNoFeedback: getCookieByName("yesNoFeedback") || "Not submitted",
            uuid: getCookieByName("uuid"),
            path: window.location.href,
            hasPreviousFeedback: getCookieByName("feedbackSubmitted") || "false",
            sheetId: $("#hidden-sheet-id").val()
        };
    };

    $('.feedback .feedback-vote-button').on('click', function (e) {
        var moreContent = $(feedbackProps.feedbackMoreInfoSelector);
        var vote = '';
        if ($(this).hasClass('feedback-no-button')) {
            moreContent.show();
            moreContent.addClass('show');
            $('.feedback .feedback-question').hide();
            $('.feedback-more-info.show').one('transitionend webkitTransitionEnd oTransitionEnd', function () {
                scrollToFeedbackForm();
            });
            vote = 'no';
        } else {
            onAfterVote();
            moreContent.hide();
            vote = 'yes';
        }

        setFeedbackInfo(vote);
    });

    $('.feedback .feedback-send-data-button').on('click', function () {
        $(feedbackProps.feedbackMoreInfoSelector).addClass('hide');

        var endpoint = "https://baas.kinvey.com/rpc/" + kinveyAppKey + "/custom/saveFeedback"
        if (getFeedbackComment()) {
            $.ajax({
                url: endpoint,
                method: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(getFeedbackData()),
                crossDomain: true,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa("feedback:feedback"));
                }
            });
        }

        onAfterVote();
    });

    $('.close-button-container').on('click', function () {
        feedbackProps.isClosed = true;
        // snooze popup per product until the end of the day
        localStorage.setItem(localStorageFeedbackSnoozeKey(), new Date());
        toggleFeedbackSticky(false);
        setFeedbackInfo(null, feedbackProps.isClosed)
    });

    var hasVoted = function () {
        var feedbackInfo = getFeedbackInfo();
        if (feedbackInfo) {
            var vote = JSON.parse(feedbackInfo).vote;
            return vote && (vote.toLowerCase() === 'yes' || vote.toLowerCase() === 'no');
        }

        return false;
    }

    var hasClosed = function () {
        var feedbackInfo = getFeedbackInfo();
        if (feedbackInfo) {
            return JSON.parse(feedbackInfo).closed;
        }

        return false;
    }

    var shouldRunFeedbackTimer = function () {
        return canVote() && !isSnoozed();
    }

    var getElementTopOffset = function (selector) {
        return $(selector)[0].getBoundingClientRect().top;
    }

    var isFeedbackBarInViewPort = function () {
        return $(feedbackProps.feedbackFormSelector).length && getElementTopOffset(feedbackProps.feedbackFormSelector) < window.innerHeight;
    }

    var shouldShowFeedbackPopup = function () {
        return !feedbackProps.isVoting && !isFeedbackBarInViewPort();
    }

    var toggleFeedbackSticky = function (isSticky) {
        if (isSticky) {
            $(feedbackProps.feedbackFormSelector).addClass(feedbackProps.feedbackFixedClassName);
        } else {
            $(feedbackProps.feedbackFormSelector).removeClass(feedbackProps.feedbackFixedClassName);
        }

        feedbackProps.isSticky = isSticky;
    }

    var submitToAnalytics = function (data) {
        var dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'virtualEvent',
            'eventCategory': 'feedback',
            'eventAction': toPascaleCase(data),
            'eventLabel': window.location.href
        });
    }

    var toPascaleCase = function (str) {
        if (!str || str.length === 0) {
            return '';
        }

        var lower = str.toLowerCase();
        var firstLetter = lower[0];
        return firstLetter.toUpperCase() + lower.slice(1);
    }

    var onWindowScrollOrResize = function () {
        if (!isSnoozed() && canVote()) {
            var $window = $(window);
            var scrollOffset = $window.height() + $window.scrollTop();
            var footerHeight = $(feedbackProps.feedbackFormSelector).outerHeight() + $('#footer').outerHeight();
            var feedbackOffsetTop = document.body.scrollHeight - footerHeight;

            // Double the feedback form height in order to have sticky scroll when it is scrolled down to footer
            toggleFeedbackSticky(scrollOffset - $(feedbackProps.feedbackFormSelector).outerHeight() * 2 < feedbackOffsetTop);
        }
        else {
            window.removeEventListener('scroll', onWindowScrollOrResize);
            window.removeEventListener('resize', onWindowScrollOrResize);
        }
    }
    var init = function () {
        if (!canVote()) {
            $(feedbackProps.feedbackFormSelector).addClass(feedbackProps.feedbackDisabledClassName);
        }
        else {
            if (shouldRunFeedbackTimer()) {
                setTimeout(function () {
                    if (shouldShowFeedbackPopup()) {
                        $(feedbackProps.feedbackFormSelector).addClass(feedbackProps.feedbackFixedClassName);

                        window.addEventListener('scroll', onWindowScrollOrResize, {passive: true});
                        window.addEventListener('resize', onWindowScrollOrResize, {passive: true});
                    }
                }, 30000) // 30 sec
            }
        }
    };

    init();
});
