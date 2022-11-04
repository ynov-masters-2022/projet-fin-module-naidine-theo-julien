const fakeJwt = 
    {
      name: "Thomas",
      firstname: "Martin",
      country: "France",
      city: "lyon"
    }
  ;
  
export const getCredentials = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(fakeJwt), 2500));
};
