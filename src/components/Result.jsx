import {
  ResultBlock,
  ResultListItem,
  ResultList,
  ResultListItemBlock,
  LoadingIamge,
} from "../App.styled";
import loader from "../assets/icons/loader.gif";

export const Result = ({ searchResult, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <LoadingIamge src={loader} />
      ) : (
        <ResultBlock>
          {searchResult.length > 0 && (
            <ResultList>
              {searchResult.map((el) => (
                <ResultListItem key={el.key}>
                  <ResultListItemBlock>{el.key}</ResultListItemBlock>
                  <ResultListItemBlock>{el.val}</ResultListItemBlock>
                </ResultListItem>
              ))}
            </ResultList>
          )}
        </ResultBlock>
      )}
    </>
  );
};
