import Video from '../page-objects/video';

describe('Video', () => {
  before(async () => {
    await Video.open();
    await Video.acceptCookieConsent();
  });

  it('should play a video when button is clicked', async () => {
    await Video.triggerVideoPlayback();

    const state = await Video.getVideoPlayerPlayState();

    expect(state).toEqual('playing');
  });
});
