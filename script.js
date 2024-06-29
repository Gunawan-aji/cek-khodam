document.getElementById('khodamForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const birthdate = document.getElementById('birthdate').value;

  const khodamResult = checkKhodam(name, birthdate);
  document.getElementById('result').textContent = `Khodam anda adalah : ${khodamResult}`;
});

function checkKhodam(name, birthdate) {
  const khodamList = [
      'Kosong', 'Bedul', 'Oray Kadut', 'Kontolodon', 'Buaya Darat', 'siput', 'Tobrut', 'Kodomo'
  ];


  const randomIndex = Math.floor(Math.random() * khodamList.length);
  return khodamList[randomIndex];
}
