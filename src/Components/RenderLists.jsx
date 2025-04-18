import Button from "@mui/material/Button";

export default function RenderLists({ item, bought, Handler }) {
  return (
    <>
      <li
        className={`list-group-item  capitalize text-lg ${bought && "active"}`}
      >
        {item}
        <span>
          <Button
            onClick={() => [Handler.Buy(item)]}
            sx={{ float: "right" }}
            variant="outlined"
            color="primary"
          >
            Buy
          </Button>
        </span>
      </li>
    </>
  );
}
