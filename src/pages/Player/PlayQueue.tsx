import { Button, Drawer } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import usePlayQueueStore from '@/store/usePlayQueueStore'
import useUiStore from '@/store/useUiStore'
import CommonList from '@/components/CommonList/CommonList'

const PlayQueue = () => {

  const [
    currentIndex,
    playQueue,
    removeFilesFromPlayQueue
  ] = usePlayQueueStore(
    (state) => [
      state.currentIndex,
      state.playQueue,
      state.removeFilesFromPlayQueue,
    ]
  )

  const [
    playQueueIsShow,
    updatePlayQueueIsShow
  ] = useUiStore(
    (state) => [
      state.playQueueIsShow,
      state.updatePlayQueueIsShow,
    ]
  )

  const currentFile = playQueue?.find((item) => item.index === currentIndex)

  return (
    <Drawer
      anchor={'right'}
      open={playQueueIsShow}
      onClose={() => updatePlayQueueIsShow(false)}
      elevation={0}
    >
      <Grid container wrap='nowrap' height={'100%'} width={{ xs: '100vw', sm: '400px', md: '500px' }}>
        <Grid height={'100%'} className='app-region-no-drag'>
          <Button sx={{ height: '100%' }} onClick={() => updatePlayQueueIsShow(false)}>
            <KeyboardArrowRightOutlinedIcon />
          </Button>
        </Grid>
        <Grid xs sx={{ height: '100%', overflowY: 'auto', paddingY: '1rem' }}>
          {
            playQueue &&
            <CommonList
              listData={playQueue}
              activeFilePath={currentFile?.filePath}
              scrollFilePath={currentFile?.filePath}
              func={{ handleClickRemove: removeFilesFromPlayQueue }}
            />
          }
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default PlayQueue