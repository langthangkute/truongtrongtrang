var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "About Me";
	$scope.updateInfo = "Updated 20 minuted ago";
	$scope.verify = "Verify";
	$scope.des = "Description about me !";
	$scope.cv = "Công việc";
	$scope.job1 = "Sinh viên";
	$scope.job2 = "Đại học CNTT 16";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "langthangkute@gmail.com";
	$scope.contact2 = "https://fb.com/Mr.coverr";
	$scope.contactmi = " LIÊN HỆ TÔI";
	$scope.ifyou = "Nếu thích bạn có thể liên hệ với mình ^^";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "Twitter";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://fb.com/Mr.coverr";
	$scope.linkzl = "0984413499";
	$scope.linksc = "https://twitter.com/Truongtop1";
	$scope.linkgm = "langthangkute@gmail";
	$scope.phonenumber = "0984413499 - Viettel";
	$scope.email = "langthangkute@gmail";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "";
	$scope.contentStory2 = "";
	$scope.storytitle1 = "Đời lập trình của tôi bắt đầu bằng sự tình cờ ...";
	$scope.storytitle2 = "Lời hứa của tôi với bản thân và mọi người trong hai năm qua ...";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "Cảm ơn mọi người đã ủng hộ";
	$scope.au = "Trường T.O.P";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});