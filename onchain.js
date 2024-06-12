const apiToken = `5VBRRZ2IBFPRQDPWKFVISZNPNWWYER3I91`;

const apisite = `api.arbiscan.io/api`;
const method1 = `module=account&action=balance`;
const method2 = `module=account&action=tokenbalance`;
const contract= `0x764BFC309090E7f93EDcE53E5BeFa374CDCB7b8e`;

function reqxwx() {
    let inputx = document.getElementById("Inputx1");
    const address = inputx.value;
    console.log("address: "+address);
    document.getElementById("arbiscan").href=`https://arbiscan.io/address/${address}`;
    axios.get(`https://${apisite}?${method1}&address=${address}&tag=latest&apikey=${apiToken}`).then(res => {
        const lut = res.data.result;
        console.log("eth: "+lut);
        document.getElementById('balUsdt').innerText = ""+(lut*0.000000000000000001);
    });
    axios.get(`https://${apisite}?${method2}&contractaddress=${contract}&address=${address}&tag=latest&apikey=${apiToken}`).then(res => {
        const lut = res.data.result;
        console.log("grimace: "+lut);
        document.getElementById('balGrim').innerText = ""+(lut*0.000000000000000001);
    });
}

//0xEB7cDAB0E80D769546A567FeBaea6585d635FdaB
//0x1B12D9994CE8AB4f3a54e53d93CdB12d3E09C4BA