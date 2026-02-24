// =======================
// SELECT ELEMENTS
// =======================

const cards = document.querySelectorAll(".jobs-card");

const totalCounter = document.getElementById("total-counter-number");
const interviewCounter = document.getElementById("interview-counter-number");
const rejectedCounter = document.getElementById("rejected-counter-number");

const allTab = document.getElementById("all-status-btn");
const interviewTab = document.getElementById("interview-status-btn");
const rejectedTab = document.getElementById("rejected-status-btn");

let total = cards.length;
let interview = 0;
let rejected = 0;
let currentTab = "all";
// =======================
// UPDATE DASHBOARD
// =======================

function updateDashboard() {
  totalCounter.innerText = total;
  interviewCounter.innerText = interview;
  rejectedCounter.innerText = rejected;
}

updateDashboard();
filterCards(currentTab);

// =======================
// LOOP ALL CARDS
// =======================

cards.forEach((card) => {

  const interviewBtn = card.querySelector(".card-btn-interview");
  const rejectedBtn = card.querySelector(".card-btn-rejected");
  const deleteBtn = card.querySelector(".delete-btn");

  const statusBtns = card.querySelectorAll(".updated-status");

  // statusBtns[0] = NOT APPLIED
  // statusBtns[1] = INTERVIEW
  // statusBtns[2] = REJECTED

  // store simple status
  card.status = "none";


  function showStatus(type) {
    statusBtns.forEach(btn => btn.classList.add("hidden"));

    if (type === "interview") statusBtns[1].classList.remove("hidden");
    else if (type === "rejected") statusBtns[2].classList.remove("hidden");
    else statusBtns[0].classList.remove("hidden");
  }


  // =======================
  // INTERVIEW CLICK
  // =======================

  interviewBtn.onclick = function () {

    if (card.status === "rejected") {
      rejected--;
      interview++;
    }

    if (card.status === "none") {
      interview++;
    }

    card.status = "interview";

    showStatus("interview");
    updateDashboard();
    filterCards(currentTab);
  };


  // =======================
  // REJECTED CLICK
  // =======================

  rejectedBtn.onclick = function () {

    if (card.status === "interview") {
      interview--;
      rejected++;
    }

    if (card.status === "none") {
      rejected++;
    }

    card.status = "rejected";

    showStatus("rejected");
    updateDashboard();
    filterCards(currentTab);
  };


  // =======================
  // DELETE CARD
  // =======================

  deleteBtn.onclick = function () {

    if (card.status === "interview") interview--;
    if (card.status === "rejected") rejected--;

    total--;

    card.remove();

    updateDashboard();
    filterCards(currentTab);
  };

});


// =======================
// TABS FILTER
// =======================

function filterCards(type) {

  cards.forEach(card => {

    if (type === "all") {
      card.style.display = "block";
    }
    else if (card.status === type) {
      card.style.display = "block";
    }
    else {
      card.style.display = "none";
    }

  });

}
function setActiveTab(activeBtn) {

  const allTabs = document.querySelectorAll(".status-btn");

  allTabs.forEach(btn => {
    btn.classList.remove("bg-[#4F7DF3]", "text-white");
    btn.classList.add("bg-[#E5E7EB]", "text-[#64748B]");
  });

  // active one
  activeBtn.classList.remove("bg-[#E5E7EB]", "text-[#64748B]");
  activeBtn.classList.add("bg-[#4F7DF3]", "text-white");
}
// DEFAULT SELECT ALL TAB
allTab.onclick = () => {
  currentTab = "all";
  filterCards(currentTab);
  setActiveTab(allTab);
};

interviewTab.onclick = () => {
  currentTab = "interview";
  filterCards(currentTab);
  setActiveTab(interviewTab);
};

rejectedTab.onclick = () => {
  currentTab = "rejected";
  filterCards(currentTab);
  setActiveTab(rejectedTab);
};// default active