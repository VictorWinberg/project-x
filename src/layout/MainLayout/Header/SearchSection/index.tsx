import { useState, forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Popper from '@mui/material/Popper';

// third-party
import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state';
import { PopupState as PopupStateType } from 'material-ui-popup-state/hooks';

// project imports
import Transitions from '@/ui-component/extended/Transitions';

// assets
import { IconAdjustmentsHorizontal, IconSearch, IconX } from '@tabler/icons-react';
import { FilledInput } from '@mui/material';

interface HeaderAvatarProps extends AvatarProps {
  children: React.ReactNode;
}

const HeaderAvatar = forwardRef(({ children, ...others }: HeaderAvatarProps, ref: React.Ref<HTMLDivElement>) => {
  const theme = useTheme();

  return (
    <Avatar
      ref={ref}
      variant="rounded"
      sx={{
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        bgcolor: 'primary.light',
        color: 'primary.dark',
        '&:hover': {
          bgcolor: 'primary.dark',
          color: 'primary.light'
        }
      }}
      {...others}
    >
      {children}
    </Avatar>
  );
});

// ==============================|| SEARCH INPUT - MOBILE||============================== //

interface MobileSearchProps {
  value: string;
  setValue: (value: string) => void;
  popupState: PopupStateType;
}

const MobileSearch = ({ value, setValue, popupState }: MobileSearchProps) => {
  const theme = useTheme();

  return (
    <OutlinedInput
      id="input-search-header"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Sök"
      startAdornment={
        <InputAdornment position="start">
          <IconSearch stroke={1.5} size="1.5rem" />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <HeaderAvatar>
            <IconAdjustmentsHorizontal stroke={1.5} size="20px" />
          </HeaderAvatar>
          <Box sx={{ ml: 2 }}>
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                bgcolor: 'orange.light',
                color: 'orange.dark',
                '&:hover': {
                  bgcolor: 'orange.dark',
                  color: 'orange.light'
                }
              }}
              {...bindToggle(popupState)}
            >
              <IconX stroke={1.5} size="20px" />
            </Avatar>
          </Box>
        </InputAdornment>
      }
      aria-describedby="search-helper-text"
      inputProps={{ 'aria-label': 'weight', sx: { bgcolor: 'transparent', pl: 0.5 } }}
      sx={{ width: '100%', ml: 0.5, bgcolor: 'background.paper' }}
    />
  );
};

// ==============================|| SEARCH INPUT ||============================== //

const SearchSection = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <PopupState variant="popper" popupId="popup-search">
          {(popupState) => (
            <>
              <Box sx={{ ml: 2 }}>
                <HeaderAvatar {...bindToggle(popupState)}>
                  <IconSearch stroke={1.5} size="1.2rem" />
                </HeaderAvatar>
              </Box>
              <Popper
                {...bindPopper(popupState)}
                transition
                sx={{ zIndex: 1100, width: '99%', top: '-43px !important', px: { xs: 1.25 } }}
              >
                {({ TransitionProps }) => (
                  <>
                    <Transitions type="zoom" {...TransitionProps}>
                      <Card sx={{ bgcolor: 'background.default', border: 0, boxShadow: 'none', px: 1 }}>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item xs>
                            <MobileSearch value={value} setValue={setValue} popupState={popupState} />
                          </Grid>
                        </Grid>
                      </Card>
                    </Transitions>
                  </>
                )}
              </Popper>
            </>
          )}
        </PopupState>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <FilledInput
          id="input-search-header"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Sök"
          endAdornment={
            <InputAdornment position="end">
              <IconSearch stroke={1.5} size="1rem" />
            </InputAdornment>
          }
          disableUnderline
          aria-describedby="search-helper-text"
          inputProps={{ 'aria-label': 'weight', sx: { bgcolor: 'transparent', pl: 0.5, py: 1.5 } }}
          sx={{ borderRadius: '6px', width: { md: 250, lg: 434 }, ml: 2, px: 2 }}
        />
      </Box>
    </>
  );
};

export default SearchSection;
