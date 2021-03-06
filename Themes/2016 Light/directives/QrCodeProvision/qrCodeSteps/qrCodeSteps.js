'use strict';

angular.module('secureauth')
  .directive('qrCodeSteps', function (config, qrCodeProvision) {

    var qrCodeStepsController = function () {
      var vm = this;

      angular.extend(vm, {
        qrStepOneTitle: qrCodeProvision.getQrStepOneTitle()[0],
        qrStepOneText: qrCodeProvision.getQrStepOneText()[0],
        qrStepTwoTitle: qrCodeProvision.getQrStepTwoTitle()[0],
        qrStepTwoText: qrCodeProvision.getQrStepTwoText()[0],
        qrStepThreeTitle: qrCodeProvision.getQrStepThreeTitle()[0],
        qrStepThreeText: qrCodeProvision.getQrStepThreeText()[0],
        qrStepImage: qrCodeProvision.getQrStepImage()[0],
        qrStepVerifyInput: qrCodeProvision.getQrStepVerifyInput()[0],
        qrStepVerifyButton: qrCodeProvision.getQrStepVerifyButton()[0],
        qrStepVerifyError: qrCodeProvision.getQrStepVerifyError()[0],
        qrThirdPartyImg: qrCodeProvision.getQrThirdPartyImg(),
        qrThirdPartyImgLink: qrCodeProvision.getQrThirdPartyImgLink(),
        qrThirdPartyAppTitle: qrCodeProvision.getQrThirdPartyAppTitle()[0],
        qrThirdPartyAppLink: qrCodeProvision.getQrThirdPartyAppLink(),
        qrThirdPartyAppText: qrCodeProvision.getQrThirdPartyAppText()[0],
        qrThirdPartyAppTextLink: qrCodeProvision.getQrThirdPartyAppTextLink()[0],
        qrThirdParty: qrCodeProvision.getQrThirdParty()[0],
        qrSuccessMessage: qrCodeProvision.getQrSuccessMessage()[0],
        qrSuccessDevice: qrCodeProvision.getQrSuccessDevice()[0],
        qrRegDevice: qrCodeProvision.getQrRegDevice()[0],
        onChange: function (id) {
          var verify = angular.element('#' + id + '_UiInput').val();
          angular.element('#' + id).val(verify);
        },
        onClick: function (id) {
          var button = angular.element('#' + id);
          button.trigger('click');
        }
      });

    };

    return {
      restrict: 'EA',
      controller: qrCodeStepsController,
      controllerAs: 'QrCodeSteps',
      templateUrl: config.theme + '/directives/QrCodeProvision/qrCodeSteps/qrCodeSteps.html',
      bindToController: true
    };
  });
