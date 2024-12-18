//DTO
class transactionResponse{
    constructor(transaction){
        this.date_time =transaction.date_time;
        this.type = transaction.type;
        this.from_to = transaction.from_to;
        this.description = transaction.description;
        this.amount = transaction.amount;
        this.user_id = transaction.user_id;
    }
}

module.exports = {transactionResponse};
