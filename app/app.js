var BudgetTracker = angular.module("BudgetTracker", []);

	BudgetTracker.controller("MainController", function($scope) {
		
		$scope.IncomeEntries = [];
		$scope.TotalIncome = 0;
		$scope.ExpenseTotal = 0;
		$scope.Remainding = 0;

		$scope.AddIncome = function () {
			$scope.TotalIncome += $scope.AmountInput1;
			$scope.IncomeEntries.push({"description": $scope.IncomeDescriptionInput, "amount": $scope.AmountInput1});
			$scope.IncomeDescriptionInput = "";
			$scope.AmountInput1 = "";
	};

		$scope.ExpenseEntries = [];

		$scope.AddExpense = function () {
			$scope.ExpenseTotal += $scope.AmountInput2;
			$scope.ExpenseEntries.push({"description": $scope.ExpenseDescriptionInput, "amount": $scope.AmountInput2});
			$scope.ExpenseDescriptionInput = "";
			$scope.AmountInput2 = "";
			$scope.Remainding = $scope.TotalIncome - $scope.ExpenseTotal;
	};

	});