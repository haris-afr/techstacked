import { useStackBuilder } from './hooks/useStackBuilder';
import { useTheme } from './hooks/useTheme';
import { STACK, STACK_ORDER } from './data/stackData';
import Blobs from './components/Blobs';
import Hero from './components/Hero';
import PresetBar from './components/PresetBar';
import CategorySection from './components/CategorySection';
import StatsPanel from './components/StatsPanel';
import ReviewPanel from './components/ReviewPanel';
import PromptPanel from './components/PromptPanel';
import ScriptPanel from './components/ScriptPanel';
import DockerPanel from './components/DockerPanel';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const {
    selections,
    toggleOption,
    clearAll,
    randomize,
    applyPreset,
    filledCount,
    flags,
    warnCount,
    promptText,
    commandText,
    markdownText,
    dockerfileText,
    composeText,
    dockerNote,
    dir,
    setDir,
  } = useStackBuilder();

  return (
    <>
      <Blobs />
      <div className="page">
        <div className="nav">
          <span className="nav-brand"><span className="dot-accent" />TechStacker</span>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <Hero />
        <PresetBar onApply={applyPreset} />

        <div className="builder-grid">
          <div>
            <p className="metrics-legend">P = performance · S = scalability · $ = cost efficiency — hover any bar for details</p>
            {STACK_ORDER.map((key) => (
              <CategorySection
                key={key}
                categoryKey={key}
                category={STACK[key]}
                selectedId={selections[key]}
                onSelect={toggleOption}
              />
            ))}
          </div>

          <aside>
            <StatsPanel filledCount={filledCount} warnCount={warnCount} onRandomize={randomize} onClear={clearAll} />
            <ReviewPanel selections={selections} flags={flags} markdownText={markdownText} />
            <PromptPanel promptText={promptText} />
            <ScriptPanel commandText={commandText} dir={dir} onDirChange={setDir} />
            <DockerPanel dockerfileText={dockerfileText} composeText={composeText} dockerNote={dockerNote} />
          </aside>
        </div>
      </div>
    </>
  );
}
