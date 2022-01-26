var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'Samohina_Vmodule/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Samohina_Vmodule/js/view/shipping-payment-mixin': true
            }
        }
    }
}
