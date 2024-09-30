import Alert from '@mui/material/Alert';
import Button from "@mui/material/Button";

export const ErrorInfo = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <Alert variant="outlined" severity="error">
        <div>Error, please reload the page </div>
        <Button variant="outlined" onClick={handleClick}>
          Reload
        </Button>
      </Alert>
    </div>
  );
};
