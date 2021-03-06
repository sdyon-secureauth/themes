'use strict';

angular.module('secureauth')
  .directive('manageAcctPassword', function (config, manageAccount, $timeout) {

    var manageAcctPasswordController = function () {
      var vm = this;

      angular.extend(vm, {
        newPassword: manageAccount.getNewPassword(),
        confirmPassword: manageAccount.getConfirmPassword(),
        acctPassMsg: manageAccount.getAcctPassMsg()[0],
        acctPassCloseBtn: manageAccount.getAcctPassCloseBtn()[0],
        acctPassResetBtn: manageAccount.getAcctPassResetBtn()[0],
        errorText: manageAccount.getErrorText()[0],
        required: true,
        focus: false,
        password: '',
        confirm: '',
        onChange: function (id) {
          var passVal = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(passVal);
        },
        resetPass: function (id) {
          var button = angular.element('#' + id);
          button.trigger('click');
        },
        closeModal: function () {
          var button = angular.element('#ContentPlaceHolder1_CancelResetPasswordModalButton');
          vm.required = false;
          button.trigger('click');
        },
        showModal: function () {
          var modal = angular.element('#ContentPlaceHolder1_ResetPasswordModal_backgroundElement');
          var modalVisible = modal.css('display');
          if (modalVisible !== 'none' && modal.length > 0) {
            modal.parent().addClass('ng-cloak');
            angular.element('#resetPassword').modal();
            vm.focus = true;
          }
        },
        onKey: function ($event) {
          var keyCode = $event.which || $event.keyCode;
          var resetButton = angular.element('#resetPassBtn');
          if (keyCode === 13) {
            $timeout( function () {
              resetButton.trigger('click');
            });
          }
        },
        init: function () {
          vm.showModal();
        }
      });

      vm.init();
    };

    return {
      restrict: 'EA',
      controller: manageAcctPasswordController,
      controllerAs: 'ManageAcctPassword',
      templateUrl: config.theme + '/directives/ManageAccounts/manageAcctPassword/manageAcctPassword.html',
      bindToController: true
    };
  });
