

const pickUserHand = (hand) => {
    console.log(hand);
    //hide the current Page
    let hands = document.querySelector(".hands");
    let contest = document.querySelector(".contest");
    hands.style.display = "none";
    //Display the results
    contest.style.display = "flex";
}