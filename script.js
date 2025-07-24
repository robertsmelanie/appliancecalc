function calculateEnergyCost(watts, hours, rate) {
    const kWh = (watts * hours) / 1000;
    const daily = kWh * rate;
    const monthly = daily * 30;
    const yearly = daily * 365;
    return {
        daily: daily.toFixed(2),
        monthly: monthly.toFixed(2),
        yearly: yearly.toFixed(2)
    };
}

document.getElementById('energyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const watts = parseFloat(document.getElementById('watts').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const rate = parseFloat(document.getElementById('rate').value);

    const result = calculateEnergyCost(watts, hours, rate);
    document.getElementById('daily').innerText = result.daily;
    document.getElementById('monthly').innerText = result.monthly;
    document.getElementById('yearly').innerText = result.yearly;
    document.getElementById('results').classList.remove('d-none');
});