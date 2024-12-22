let kataMotivasi = [
    "Jangan pernah menyerah pada mimpimu.",
    "Kegagalan adalah keberhasilan yang tertunda.",
    "Kamu lebih kuat dari yang kamu kira.",
    "Setiap hari adalah kesempatan baru.",
    "Percayalah pada diri sendiri.",
    "Belajar dari kesalahan adalah kunci kesuksesan.",
    "Jangan takut untuk gagal.",
    "Jadilah versi terbaik dari dirimu.",
    "Kebahagiaan sejati datang dari dalam diri.",
    "Teruslah berjuang dan jangan pernah menyerah.",
    "Hidup adalah petualangan yang indah.",
    "Nikmati setiap momen dalam hidup.",
    "Jangan biarkan masa lalu menghantuimu.",
    "Fokus pada tujuanmu.",
    "Lingkungi dirimu dengan orang-orang positif.",
    "Berpikir positif akan menarik hal-hal positif.",
    "Ubahlah mimpi menjadi kenyataan.",
    "Jangan pernah berhenti belajar.",
    "Kebaikan yang kau berikan akan kembali padamu.",
    "Kamu mampu melakukan apa saja yang kamu inginkan."
];


function btnsubmit()
{
    let kata = Math.floor(Math.random() * kataMotivasi.length)
    console.log(kataMotivasi[kata])
    let output = document.getElementById("outkata")
    output.innerHTML = `<input type="text" readonly value="${kataMotivasi[kata]}" class="output">`
}