var crabPrices = {
	init: function(){
		//crabPrices.share();
		crabPrices.makeTable();
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = ""; //Tweet text
			var url = ""; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = ""; //Picture URL
			var title = ""; //Post title
			var description = ""; //Post description
			var url = ""; //Interactive URL
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
				{responsivePriority: 5, targets: 3},
				{responsivePriority: 6, targets: 4}
			]
		});
	}
}
$(document).ready(function(){
	crabPrices.init();
	console.log("connected");
});
