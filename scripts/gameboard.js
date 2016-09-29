(function($){
	function GameBoard(){}
	
	GameBoard.prototype.render = function(graph, size){
		this.graph = graph;
		this.graph.vertices.forEach(function(elem){
			var nodeHeightWidth = Math.floor((410 - (size*2))/size);
			var node = $('<div class="node">' + elem.id + '</div>').css({'height':nodeHeightWidth+'px','width':nodeHeightWidth+'px'});
			$('.container').append(node);
		});
	}
	
	//(410 - (5*2))/5
	
	
	window.GameBoard = GameBoard;
})(jQuery);