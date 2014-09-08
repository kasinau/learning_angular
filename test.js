/**
 * Created by radu on 9/7/14.
 */
function DeathrayMenuController($scope){
    $scope.menuState = [];
    $scope.menuState.show = false;
    $scope.toggleMenu = function(){
        $scope.menuState.show = !$scope.menuState.show;
    }

    $scope.stun = function(){
        alert(1);
    }
    $scope.disintegrate = function(){
        alert(2);
    }
    $scope.erase = function(){
        alert(3);
    }
}

function HeaderController($scope){
    $scope.isError = false;
    $scope.isWarning = false;

    $scope.showError = function(){
        $scope.messageText = 'This is an error';
        $scope.isError = true;
        $scope.isWarning = false;
    }

    $scope.showWarning = function(){
        $scope.messageText = 'This is an warning';
        $scope.isError = false;
        $scope.isWarning = true;
    }
}

function RestaurantTableController($scope){
    $scope.directory = [
        {
            name: 'The Handsome Heifer',
            cuisine: 'BBQ'
        },
        {
            name: 'Green\'s Green Greens',
            cuisine: 'Salads'
        },
        {
            name: 'House of Fine Fish',
            cuisine: 'Seafood'
        },
    ];

    $scope.selectRestaurant = function(row){
        $scope.selectedRow = row;
    }
}