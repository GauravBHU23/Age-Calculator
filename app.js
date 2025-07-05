function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.className = "toast show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

function CalculateAge() {
  const dateInput = document.getElementById("date").value;
  const result = document.getElementById("result");

  if (!dateInput) {
    showToast("❗ Please select your Date of Birth.");
    return;
  }

  const birthDate = new Date(dateInput);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageYears < 0) {
    showToast("❗ Future dates are not allowed!");
    return;
  }

  const message = `🎉 You are <b>${ageYears}</b> years, <b>${ageMonths}</b> months, and <b>${ageDays}</b> days old.`;
  result.innerHTML = message;
  showToast("✅ Age calculated successfully!");
}
