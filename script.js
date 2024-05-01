function generate(){
    var quotes = {
        "- Harry Potter" : '"I solemnly swear that I am up to no good."',
        "- Percy Jackson" : '"Dont feel bad, Im usually about to die."',
        "- Finn mertens" : '"Everthing small is just a smaller version of something big."',
        "- Thorfinn Karlsefni" : '"Revenge? I don t care about revenge anymore. I want to live, that s all."'

    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quotes").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}