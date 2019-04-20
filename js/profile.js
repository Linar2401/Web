var time = 375;

function toNotifications() {
    setTimeout(toNotifications2,time);
}

function toSch() {
    setTimeout(toSch2,time);
}

function toJoinGr() {
    setTimeout(toJoinGr2,time);
}

function toNotifications2() {
    document.getElementById("notificationsCollapse").scrollIntoView(true);
}

function toSch2() {
    document.getElementById("scheduleCollapse").scrollIntoView(true);
}

function toJoinGr2() {
    document.getElementById("joiningGroupsCollapse").scrollIntoView(true);
}

