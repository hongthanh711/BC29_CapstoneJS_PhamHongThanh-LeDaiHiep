function Services(){{
    this.arr = [];

    this.getListProductsApi = function(){{
        return axios({
            url: "https://628b9962667aea3a3e32d1df.mockapi.io/API/capstoneJS",
            method: "GET",
        });

    }}
          
}}