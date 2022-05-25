$.get("/data/blog.js").done(function(posts){
    $("#posts").html("");
    posts.forEach(function(post) {
        let h3 = "<h3>" + post.title + "</h3>>";
        let p = "<p>" + post.content + "</p>";
        $("#posts").append(h3 + p);
    })
})