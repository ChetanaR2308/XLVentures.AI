from backend.config.llm import llm

print(
    llm.invoke("Say hello").content
)