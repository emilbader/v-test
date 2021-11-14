import Page from './page';
import { ChainablePromiseElement } from 'webdriverio';

class Video extends Page {
  public get videoWrapper(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('#Video-1');
  }

  public open(): Promise<string> {
    return super.open('/intl/v/car-safety/a-million-more');
  }

  public triggerVideoPlayback(): Promise<void> {
    return this.videoWrapper.$('button').click();
  }

  public async getVideoPlayerPlayState(): Promise<string> {
    const wrapper = await this.videoWrapper.$('iframe');

    await browser.switchToFrame(wrapper);

    await $('#movie_player').waitForDisplayed({
      timeout: 2000,
      interval: 200,
    });

    const playerClasses = await $('#movie_player').getAttribute('class');

    if (playerClasses.includes('playing-mode')) return 'playing';
    if (playerClasses.includes('paused-mode')) return 'paused';

    return 'unknown_play_state';
  }
}

export default new Video();
