/**Material UI imports */
import {withStyles} from '@material-ui/core/styles' //DOCS: https://material-ui.com/styles/api/
import Button from '@material-ui/core/Button'       //DOCS: https://material-ui.com/components/buttons/


/**Creating custom styled button for "ERROR" *red* colored button */
export const ErrorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main,
      '&:hover': {
        backgroundColor: theme.palette.error.dark,
      },
    },
  }))(Button);

  /**Creating custom styled button for "SUCCESS" *green* colored button */
  export const SuccessButton = withStyles((theme) => ({
    root: {
      color: '#f5f5f5',
      backgroundColor: theme.palette.success.main,
      '&:hover': {
        backgroundColor: theme.palette.success.dark,
      },
    },
  }))(Button);

   /**Creating custom styled button for "Secondary Actions" such as a cancel colored button */
   export const SecondaryActionButton = withStyles((theme) => ({
    root: {
      color: '#222222',
      backgroundColor: theme.palette.primary.light+'33',
      '&:hover': {
        backgroundColor: theme.palette.error.light,
      },
    },
  }))(Button);

   /**Creating custom styled button for "SUCCESS" *green* colored button that is square*/
   export const SquareErrorButton = withStyles((theme) => ({
    root: {
      maxWidth:30,
      minWidth:30,
      maxHeight:30,
      minHeight:30,
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main,
      '&:hover': {
        backgroundColor: theme.palette.error.dark,
      },
    },
  }))(Button);

   /**Creating custom styled button for "Secondary Actions" such as a cancel colored button that is square*/
   export const SquarePrimaryButton = withStyles((theme) => ({
    root: {
      maxWidth:30,
      minWidth:30,
      maxHeight:30,
      minHeight:30,
      margin:.5,
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.primary.light,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  }))(Button);