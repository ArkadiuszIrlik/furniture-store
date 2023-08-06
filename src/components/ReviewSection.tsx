import { ReviewScoreStars } from 'components';

function ReviewSection({
  reviewArray,
  reviewScore,
}: {
  // reviewArray: any[];
  reviewScore: number;
}) {
  // const userInitials = review.username.split(' ').map(e => e[0]).join().slice(0,2)

  return (
    <div>
      <div className="flex flex-col border-y-[1px] border-y-primary-300 py-2 sm:items-center sm:py-4">
        <h4 className="font-dm-sans text-xl sm:text-4xl">REVIEWS</h4>
        <div className="flex items-end gap-3">
          <ReviewScoreStars score={reviewScore} />
          <p className="font-dm-sans font-medium leading-none">
            {reviewArray.length} Reviews
          </p>
        </div>
      </div>
      <div className="px-1 sm:px-4">
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          {reviewArray.map((review, index) => {
            return (
              <div
                className="border-b-[1px] border-primary-300 py-3 sm:py-4"
                key={index}
              >
                <div className="mb-2 flex gap-4 sm:mb-3">
                  <div
                    className="flex aspect-square min-w-[3rem]
                    shrink-0 items-center justify-center rounded-full
                    bg-primary-700 p-2"
                  >
                    <p className="font-open-sans text-lg font-semibold text-white">
                      {review.username
                        .split(' ')
                        .map((el) => el[0])
                        .join('')
                        .slice(0, 2)}
                    </p>
                  </div>
                  <div>
                    <p className="font-open-sans font-semibold">
                      {review.username}
                    </p>
                    <ReviewScoreStars score={review.score} />
                  </div>
                  <p className="ml-auto self-start font-open-sans">
                    {new Date(review.datePublished).toLocaleString('en-US', {
                      month: 'numeric',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div>
                  <p className="font-open-sans text-xl font-bold">
                    {review.header}
                  </p>
                  <p className="font-open-sans">{review.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ReviewSection;
