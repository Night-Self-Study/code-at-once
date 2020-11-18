import React from 'react';
import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useCodeContext } from '#/contexts/CodeContext';
import { JAVA, PYTHON } from '#/lib/constants';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LanguageController() {
  const classes = useStyles();
  const { language, setLanguage } = useCodeContext();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Language</InputLabel>
        <Select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <MenuItem value={JAVA}>Java</MenuItem>
          <MenuItem value={PYTHON}>Python</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
