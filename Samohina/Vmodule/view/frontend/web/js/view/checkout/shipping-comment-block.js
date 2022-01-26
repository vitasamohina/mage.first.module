define([
        'jquery',
        'ko',
        'uiComponent',
        'Magento_Checkout/js/model/quote'
    ], function (
        $, ko, Component, quote) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Samohina_Vmodule/checkout/shipping-comment-block'
            },
            initObservable: function () {
                this.selectedMethod = ko.computed(function() {
                    var method = quote.shippingMethod();
                    var selectedMethod = method != null ? method.method_code : null;
                    return selectedMethod;
                }, this);

                return this;
            },
            var config = {
                config: {
                    mixins: {
                        'Magento_Checkout/js/action/place-order': {
                            'Techflarestudio_ShippingComment/js/action/place-order-mixin': true
                        }
                    }
                }
            };
        });
    }
);
