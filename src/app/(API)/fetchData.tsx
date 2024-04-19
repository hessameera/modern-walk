


export const allProductFetch = () => {

     function homeProduct  (cd: any) {

        return fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                return cd(data)
            });

    }
}

export default  allProductFetch;