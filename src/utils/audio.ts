// Simple Web Audio API synthesizer for an ambient ocean-waves sound
class OceanSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private gainNode: GainNode | null = null;
  private activeNodes: AudioScheduledSourceNode[] = [];

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.value = 0.35;
      this.gainNode.connect(this.ctx.destination);
    }
  }

  public playWaves() {
    this.stop();
    this.init();
    if (!this.ctx || !this.gainNode) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;

    // Looping white noise is the raw "wash" of the surf
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    // Lowpass filter softens the noise into a distant roar
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 600;

    // Slow volume swell: one wave rolling in roughly every 8 seconds
    const swell = this.ctx.createGain();
    swell.gain.value = 0.5;
    const swellLfo = this.ctx.createOscillator();
    swellLfo.frequency.value = 0.12;
    const swellDepth = this.ctx.createGain();
    swellDepth.gain.value = 0.45;
    swellLfo.connect(swellDepth);
    swellDepth.connect(swell.gain);

    // Filter opens as each wave breaks
    const filterDepth = this.ctx.createGain();
    filterDepth.gain.value = 350;
    swellLfo.connect(filterDepth);
    filterDepth.connect(filter.frequency);

    noise.connect(filter);
    filter.connect(swell);
    swell.connect(this.gainNode);

    noise.start();
    swellLfo.start();
    this.activeNodes.push(noise, swellLfo);
  }

  public stop() {
    this.activeNodes.forEach((node) => {
      try {
        node.stop();
        node.disconnect();
      } catch {
        // ignore
      }
    });
    this.activeNodes = [];
    this.isPlaying = false;
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    }
    this.playWaves();
    return true;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const oceanAudio = new OceanSoundEngine();
