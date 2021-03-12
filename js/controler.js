function onInit() {
    getVideo(`https://www.googleapis.com/youtube/v3/search?part=snippet
    &videoEmbeddable=true&type=video&key=AIzaSyDp8nxxpBaEBS5M6GOoUWwv7HhJvCbZY1s&q=beatles`)
        .then(videos => renderDeatils(videos))
        renderWiki('beatles')

}
function renderDeatils(videos) {
    const strHtmls = videos.items.map(video => {
        return `
        <div onclick="renderVideo('${video.id.videoId}')" class="video-card ">
        <img src="${video.snippet.thumbnails.default.url}" alt="">
        <p>${video.snippet.title}</p>
        </div>
        `
    })
    document.querySelector('.list-video').innerHTML = strHtmls.join('')
     renderVideo(videos.items[0].id.videoId)

}
function renderVideo(video) {
    
    var strHtml=`<iframe  onclick="getWiki()" width="420" height="315" src="https://www.youtube.com/embed/${video}"></iframe>`
    document.querySelector('.video').innerHTML = strHtml
    
}
function onSearch() {
    const actor=document.querySelector('.search').value;
    getVideo(`https://www.googleapis.com/youtube/v3/search?part=snippet
    &videoEmbeddable=true&type=video&key=AIzaSyDp8nxxpBaEBS5M6GOoUWwv7HhJvCbZY1s&q=${actor}`)
        //  .then(videos=> console.log('videos:', videos))
        .then(videos => renderDeatils(videos))
        renderWiki(actor)

}
function renderWiki(actor){
    console.log(actor);
    getVideo(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&
    srsearch=${actor}&format=json`)
        .then(details =>{
            var strHtml=`
            <h2>${details.query.search[0].title}</h2>
            <p>${details.query.search[0].snippet}</p>
            <h3>${details.query.search[3].title}</h3>
            <p>${details.query.search[3].snippet}</p>
            `
            document.querySelector('.band-details').innerHTML = strHtml
        })
        

} 
