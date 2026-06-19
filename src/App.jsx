import { useStackBuilder } from './hooks/useStackBuilder';
import { STACK, STACK_ORDER } from './data/stackData';
import Blobs from './components/Blobs';
import Hero from './components/Hero';
import PresetBar from './components/PresetBar';
import CategorySection from './components/CategorySection';
import StatsPanel from './components/StatsPanel';
import ReviewPanel from './components/ReviewPanel';
import PromptPanel from './components/PromptPanel';
import ScriptPanel from './components/ScriptPanel';

export default function App() {
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
    dir,
    setDir,
  } = useStackBuilder();

  return (
    <>
      <Blobs />
      <div className="page">
        <div className="nav"><span className="dot-accent" />TechStacker</div>

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
          </aside>
        </div>
      </div>
    </>
  );
}
