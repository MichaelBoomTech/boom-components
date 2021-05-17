export function downloadSharer(e, type, event) {
    e.stopPropagation();
    let desc = `${event.description ? `${event.description.replace(/&lt;/g , "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")}  ` : ""}${(event.venue.name || event.venue.phone || event.venue.email || event.venue.website) ? "<p><b>Venue Details.</b></p>  " : ""}${event.venue.name ? `${event.venue.name},<br/>  ` : ""}${event.venue.phone ? `${event.venue.phone},<br/>  ` : ""}${event.venue.email ? `${event.venue.email},<br/>  ` : ""}${event.venue.website ? `${event.venue.website}.<br/>  ` : ""}${(event.venue.organizer.name || event.venue.organizer.phone || event.venue.organizer.email || event.venue.organizer.website) ? "<p><b>Organizer</b></p>  " : ""}${event.venue.organizer.name ? `${event.venue.organizer.name},<br/>  ` : ""}${event.venue.organizer.phone ? `${event.venue.organizer.phone},<br/>  ` : ""}${event.venue.organizer.email ? `${event.venue.organizer.email},<br/>  ` : ""}${event.venue.organizer.website ? `${event.venue.organizer.website}.<br/>  ` : ""}`,
        startDate = moment(`${event.startDate}${event.startTime ? `T${event.startTime != "23:59" ? event.startTime : "23:58"}` : ""}`).format(!event.allDay ? "YYYYMMDDTHHmmss" : "YYYYMMDD"),
        endDate = moment(`${event.endDate}${event.endTime ? `T${event.endTime != "23:59" ? event.endTime : "23:58"}` : ""}`).format(!event.allDay ? "YYYYMMDDTHHmmss" : "YYYYMMDD")
    let icsSharer = `https://calendar.boomte.ch/createIcsFile?title=${event.evTitle}&desc=${encodeURIComponent(type==='icalendar' ? desc.replace(/(<([^>]+)>)/ig, '') : desc)}&start=${startDate}&end=${endDate}&address=${encodeURIComponent(event.venue.address)}`
    window.location.href = icsSharer;
}

export function openAddToUrl(event, key) {
    let eventDescription = event.description ? createDesc(event) : "";
    switch (key) {
        case 'google':
            if (event.allDay)
                return 'https://calendar.google.com/calendar/r/eventedit?text=' + encodeURIComponent(event.evTitle) + '&dates=' + moment(formatForAddtoCalendar(event, 'start')).format('YYYYMMDD') + "/" + moment(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD') + '&details=' + encodeURIComponent(event.description ? eventDescription : "") + '&location' + setLocation(event, 'encode') + '&sprop=name';
            else
                return 'https://calendar.google.com/calendar/r/eventedit?text=' + encodeURIComponent(event.evTitle) + '&dates=' + moment(formatForAddtoCalendar(event, 'start')).format('YYYYMMDD[T]HHmmss') + '/' + moment(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD[T]HHmmss') + '&details=' + encodeURIComponent(event.description ? eventDescription : "") + '&location' + setLocation(event, 'encode') + '&sprop=name';
        case 'yahoo':
            if (event.allDay)
                return 'https://calendar.yahoo.com/?v=60&view=d&type=20&DUR=' + (event.allDay ? 'allday' : '') + '&TITLE=' + encodeURIComponent(event.evTitle) + '&ST=' + moment(formatForAddtoCalendar(event, 'start')).format('YYYYMMDD') + "&ET=" + moment(formatForAddtoCalendar(event, 'end', 'yahoo')).format('YYYYMMDD') + '&DESC=' + eventDescription + '&in_loc=' + setLocation(event);
            else
                return 'https://calendar.yahoo.com/?v=60&view=d&type=20&TITLE=' + encodeURIComponent(event.evTitle) + '&ST=' + moment(formatForAddtoCalendar(event, 'start')).format('YYYYMMDD[T]HHmmss') + "&ET=" + moment(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD[T]HHmmss') + '&DESC=' + eventDescription + '&in_loc=' + setLocation(event);
        default:
            console.error('undefined calendar type');
    }
}

export function openShareUrl(e, type, eventUrl) {
    e.stopPropagation();
    let base;
    switch (type) {
        case 'facebook': base = 'https://www.linkedin.com/sharing/share-offsite/?url=';
        case 'linkedin': base = 'https://facebook.com/sharer/sharer.php?u=';
        case 'twitter':  base = 'http://twitter.com/share?url=';
    }
    window.open(base + eventUrl, "_blank");
    return;
}

export function generateEventUrl(event, encode = false, boomEventUrlBase) {
    if (event.kind === 4) {
        return event.eventPageUrl || '';
    } else {
        return `${boomEventUrlBase}${encodeShareUrl(`${event.id}`)}?${encode ? encodeURIComponent(`comp_id=${event.comp_id}&instance=${event.instance}&startDate=${event.repeat.type ? event.startDate : ""}`) : `comp_id=${event.comp_id}&instance=${event.instance}`}&startDate=${event.repeat.type ? event.startDate : ""}`
    }
}

export function copyLink() {
    e.stopPropagation();
    let a = document.createElement('textarea');
    a.innerText = this.generateEventUrl(this.props.data.kind, false);
    document.body.appendChild(a);
    a.setSelectionRange(0, 99999);
    a.select();
    document.execCommand('copy');
    a.remove();
    this.setState({ copyBtnText: "Copied!" })
    document.getElementById("Tooltip").textContent  = 't(this.props.data.lang || this.props.lang, this.state.copyBtnText)'; 
}