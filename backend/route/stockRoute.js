import { addNewStock, getAllStocks, getStockByID, deletStockByID, updateByID }
    from '../controller/stockController';


const route = (app) => {
    app.route('/stock')
        .post(addNewStock)
        .get(getAllStocks)

    app.route('/stock/:stockID')
        .get(getStockByID)
        .delete(deletStockByID)
        .put(updateByID)
}

export default route;