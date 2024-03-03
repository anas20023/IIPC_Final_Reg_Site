// All Variables
//------------------------------------------------------------
const info_form = document.querySelector("#info");
let namee,
  email,
  phone,
  id,
  section,
  method,
  bkash_nmbr,
  nagad_nmbr,
  reference,
  Transaction_id;
const alrt_sc = document.querySelector("#success_alt");
const payment_type = document.querySelector("#payment-method");
const cash_payment = document.querySelector("#ref_div_show");
const online_payment = document.querySelector("#tr_id_div_show");
const bkash = document.querySelector("#bksh_nm_div_show");
const nagad = document.querySelector("#Nagad_nmbr_div_show");
//------------------------------------------------------------

///----------------Payment Method Change------------
payment_type.addEventListener("change", () => {
  let method = payment_type.value;
  if (method == "Cash") {
    Cash_Clean();
    Cash_More();
  } else if (method == "Bkash") {
    Bkash_Clean();
    Bkash_More();
  } else if (method == "Nagad") {
    Nagad_Clean();
    Nagad_More();
  } else {
    Clean_Default();
  }
});
///----------------Payment Method Change------------

/*info_form.addEventListener("submit", (event) => {
  //event.preventDefault();
  Value_Assign();
  Cash_Clean();
  Nagad_Clean();
  Bkash_Clean();
  Clean_Default();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  alrt_sc.classList.remove("hidden");
  alrt_sc.classList.add("flex");
  info_form.classList.remove("flex");
  info_form.classList.add("hidden");
  document.getElementById("form_name").innerHTML = "";
  setTimeout(() => {
    alrt_sc.classList.add("hidden");
    alrt_sc.classList.remove("flex");
    //location.href = "./index.html";
  }, 5000);
}); */

function Cash_Clean() {
  cash_payment.classList.remove("hidden");
  cash_payment.classList.add("flex");
  online_payment.classList.remove("flex");
  online_payment.classList.add("hidden");
  bkash.classList.remove("flex");
  bkash.classList.add("hidden");
  nagad.classList.remove("flex");
  nagad.classList.add("hidden");
}
function Bkash_Clean() {
  cash_payment.classList.remove("flex");
  cash_payment.classList.add("hidden");
  online_payment.classList.remove("hidden");
  online_payment.classList.add("flex");
  bkash.classList.remove("hidden");
  bkash.classList.add("flex");
  nagad.classList.remove("flex");
  nagad.classList.add("hidden");
}
function Nagad_Clean() {
  cash_payment.classList.remove("flex");
  cash_payment.classList.add("hidden");
  online_payment.classList.remove("hidden");
  online_payment.classList.add("flex");
  bkash.classList.remove("flex");
  bkash.classList.add("hidden");
  nagad.classList.remove("hidden");
  nagad.classList.add("flex");
}
//-----------------------------
function Clean_Default() {
  cash_payment.classList.remove("flex");
  cash_payment.classList.add("hidden");
  bkash.classList.remove("flex");
  bkash.classList.add("hidden");
  nagad.classList.remove("flex");
  nagad.classList.add("hidden");
  online_payment.classList.remove("flex");
  online_payment.classList.add("hidden");
}
function Cash_More() {
  document.getElementById("ref_name").setAttribute("required", "");
  document.getElementById("bksh_nmr").removeAttribute("required", "");
  document.getElementById("tr_id").removeAttribute("required", "");
  document.getElementById("Nagad_number").removeAttribute("required", "");
  //-------------------------------------------
  document.getElementById("bksh_nmr").value = "";
  document.getElementById("Nagad_number").value = "";
  document.getElementById("tr_id").value = "";
}
function Bkash_More() {
  document.getElementById("Nagad_number").removeAttribute("required", "");
  document.getElementById("tr_id").removeAttribute("required", "");
  document.getElementById("ref_name").removeAttribute("required", "");
  document.getElementById("bksh_nmr").setAttribute("required", "");
  document.getElementById("tr_id").setAttribute("required", "");
  document.getElementById("ref_name").value = "";
}
function Nagad_More() {
  document.getElementById("bksh_nmr").removeAttribute("required", "");
  document.getElementById("tr_id").removeAttribute("required", "");
  document.getElementById("ref_name").removeAttribute("required", "");
  document.getElementById("Nagad_number").setAttribute("required", "");
  document.getElementById("tr_id").setAttribute("required", "");
  document.getElementById("ref_name").value = "";
  document.getElementById("bksh_nmr").value = "";
}
//-----------------------
// Value Assign
function Value_Assign() {
  namee = document.getElementById("name").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phn_nmbr").value;
  id = document.getElementById("st_id").value;
  section = document.getElementById("st_sec").value;
  method = document.getElementById("payment-method").value;
  bkash_nmbr = document.getElementById("bksh_nmr").value;
  nagad_nmbr = document.getElementById("Nagad_number").value;
  Transaction_id = document.getElementById("tr_id").value;
  reference = document.getElementById("ref_name").value;
}
