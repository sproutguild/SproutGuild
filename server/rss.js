serveRSS = function() {
  var feed = new RSS({
    title: getSetting('title', 'Sprout Guild'),
    description: 'Daily Discovery of the Hippest New Natural Foods, Products & Brands',
    feed_url: Meteor.absoluteUrl()+'feed.xml',
    site_url: Meteor.absoluteUrl(),
    image_url: Meteor.absoluteUrl()+'img/favicon.png',
  });
  
  Posts.find({status: STATUS_APPROVED}, {sort: {submitted: -1}, limit: 20}).forEach(function(post) {
    feed.item({
     title: post.headline + " - " + post.companyName,
     description: post.body+'</br></br> <a href="'+getPostUrl(post._id)+'">Comments</a>',         
     author: post.author,
     date: post.submitted,
     url: (post.url ? getOutgoingUrl(post.url) : getPostUrl(post._id)),
     guid: post._id
    });
  });
  
  return feed.xml();
};
