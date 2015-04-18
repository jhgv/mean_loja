lojaMaluca.directive('formUpload', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.on("submit", function(){
				$(this).ajaxSubmit({
		            error: function(xhr) {
		                console.log('Error');
		            },
		            success: function(response) {
		                //console.log(response);
		            }
			    });

			    return false;
			});
		}
	}
});