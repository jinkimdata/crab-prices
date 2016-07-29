var crabPrices = {
	init: function(){
		crabPrices.share();
		crabPrices.makeTable();
			function scrollToAnchor(aid){
				var aTag = $("a[name='"+ aid +"']");
				$('html,body').animate({scrollTop: aTag.offset().top},'slow');
			}
		$('.button').on('click', function() {
			var btnType = $(this).attr("data-btnType");
			console.log(btnType);
			if (btnType === "map") {
				if($(".mapAnchor").is(":visible")) {
					scrollToAnchor('mapAnchor');
				} else {
					window.open("http://www.baltimoresun.com/bal-crab-prices-around-baltimore-20160729-htmlstory.html");
				};
			} else if (btnType === "table") {
				scrollToAnchor('tableAnchor');
			};
			return false;
		});
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = "Compare prices between some of the most popular crab houses in the Baltimore area."; //Tweet text
			var url = "http://data.baltimoresun.com/crab-prices/"; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = "http://data.baltimoresun.com/crab-prices/images/crab-prices-thumb.png"; //Picture URL
			var title = "Baltimore area crab prices"; //Post title
			var description = "Compare prices between some of the most popular crab houses in the Baltimore area."; //Post description
			var url = "http://data.baltimoresun.com/crab-prices/"; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	},
	makeTable: function() {
		$('#crabTable').DataTable({
    	    "order": [[0, "desc"]],
			"paging": false,
			"bInfo": false,
			"bFilter": false,
			"responsive": {
				details: {
					renderer: function ( api, rowIdx, columns ) {
						var data = $.map( columns, function ( col, i ) {
							return col.hidden ?
							'<tr class="expandedRow" data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
							'<td>'+col.title+':'+'</td> '+
							'<td>'+col.data+'</td>'+
							'</tr>' :
							'';
						} ).join('');
						return data ? $('<table/>').append( data ) : false;
					}
				}
			},
			"columnDefs": [
				{className: 'control',
				orderable: false,
				targets: 0},
				{responsivePriority: 1, targets: 1},
				{responsivePriority: 2, targets: 5},
				{responsivePriority: 3, targets: 6},
				{responsivePriority: 4, targets: 2},
				{responsivePriority: 5, targets: 4},
				{responsivePriority: 6, targets: 3}
			]
		});
	}
}
$(document).ready(function(){
	crabPrices.init();
	console.log("connected");
});
