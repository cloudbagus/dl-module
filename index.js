
module.exports = {
    core: {
        Product: require('./src/core/product'),
        Fabric: require('./src/core/fabric'),
        Buyer: require('./src/core/buyer'),
        Supplier: require('./src/core/supplier'),
        Textile: require('./src/core/textile'),
        Accessories: require('./src/core/accessories'),
        UoM: require('./src/core/UoM').UoM,
        UoM_Template: require('./src/core/UoM').UoM_Template
        Sparepart: require('./src/core/sparepart'),
    },
    map: require('./src/map'),
    validator: require('./test/validator')
}
