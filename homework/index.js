let reviews = [
	{
		text: "Awesome show!",
		score: "5"
	},
	{
		text: "Not good, not terrible",
		score: "3"
	}
];

const ratingListElement = document.querySelector("#rating-list");

for(let i = 0; i < reviews.length; i++){
	renderReview(reviews[i]);
}


function renderReview(review){
	const listItem = document.createElement("li");
	const score = document.createElement("p");
	const remove = document.createElement("button");
	
	listItem.textContent = review.text;
	score.textContent = `${review.score}/5`;
	remove.textContent = "Remove";

	remove.addEventListener("click", function() {
		
	});


	listItem.appendChild(score);
	listItem.appendChild(remove);
	ratingListElement.appendChild(listItem);
}


const reviewFormElement = document.querySelector("#survey-form");

reviewFormElement.addEventListener("submit", function (event) {
	event.preventDefault();

	const formData = new FormData(reviewFormElement);
	const reviewText = formData.get("review");
	const reviewScore = formData.get("score");

	const review = {
		text: reviewText,
		score: reviewScore
	};

	reviews.push(review);
	renderReview(review);
});



