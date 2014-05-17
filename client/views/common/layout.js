Template.layout.helpers({
  pageName : function(){
    getCurrentTemplate();
  },
  backgroundColor: function(){
  	return getSetting('backgroundColor');
  },
  secondaryColor: function(){
  	return getSetting('secondaryColor');
  },
  buttonColor: function(){
  	return getSetting('buttonColor');
  },
  headerColor: function(){
  	return getSetting('headerColor');
  },
  extraCode: function(){
    return getSetting('extraCode');
  }     
});

Template.layout.created = function(){
  Session.set('currentScroll', null);
}

Template.layout.rendered = function(){
    if(currentScroll=Session.get('currentScroll')){
      $('body').scrollTop(currentScroll);
      Session.set('currentScroll', null);
    }

    // set title
    var title = "Sprout Guild";
    var tagline = "Grow Your Network Naturally";
    document.title = (tagline ? title+': '+tagline : title) || "";
}
