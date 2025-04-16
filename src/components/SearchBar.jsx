import { Box, TextField } from "@mui/material"

const SearchBar = ({searchTerm, setSearchTerm}) => {

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
    return (
      <Box
        sx={{
        display: "flex",
        justifyContent: "center",
        mt: 2,
        mb: 3,
      }}
      >
      <TextField
              variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for a country..."
        size="small"
        sx={{
          width: 300,
          backgroundColor: "transparent",
          borderRadius: "12px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            "& fieldset": {
              borderColor: "#a5d6a7",
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: "#a5d6a7",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#a5d6a7",
            },
          },
        }}
        />
      </Box>
    )
}

export default SearchBar