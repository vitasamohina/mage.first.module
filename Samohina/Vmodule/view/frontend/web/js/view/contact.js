define(
    [
        'Magento_Ui/js/form/form',
        'Magento_Checkout/js/model/step-navigator',
        'mage/translate',
        'ko',
        'underscore'
    ],
    function (
        Component,
        stepNavigator,
        $t,
        ko,
        _) {
        'use strict';
        /**
         * check-login - is the name of the component's .html templates
         */
        return Component.extend({
            defaults: {
                template: 'Samohina_Vmodule/contact',
                visible: true
            },

            initialize: function () {
                this._super();
                // register your step
                stepNavigator.registerStep(
                    'contact',
                    'contact',
                    $t('Contact'),
                    this.visible,
                    _.bind(this.navigate, this),
                    this.sortOrder
                );
            },
            initObservable: function (){
                this._super().observe(['visible']);

                return this;
            },
            navigate: function (step) {
                step && step.isVisible(true);
            },

            setContactInformation: function () {
                stepNavigator.next();
            }
        });
    }
);
