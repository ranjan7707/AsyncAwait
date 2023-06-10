

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('happy face')
        // reject('Sad face')
    }, 3000);
  });

  let ticket;
	try {
  	ticket = await person3PromiseToShowTicketWhenWifeArrives;
  } catch(err) {
  	ticket = `${err}`;
  }
  

  return ticket;
  
};

preMovie().then((t) => console.log(`Couple makes ${t}`));


