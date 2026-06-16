import { Box, Divider, Fade, Typography } from "@mui/material";

const DistributedKVStore = (props: any) => {
  const { isMob } = props;

  return (
    <Fade in={true}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        gap="1rem"
        p="0 1rem 0.5rem"
      >
        {isMob ? (
          <Typography variant="heading_04_medium" color="primary.dark">
            C++ · TCP Sockets · WAL · Distributed Systems
          </Typography>
        ) : null}
        <Divider />
        <Typography
          variant={isMob ? "heading_04_medium" : "heading_03_medium"}
          color="primary"
        >
          Extended a replicated key-value store (state machine replication) with
          two production-grade features: a write-ahead log (WAL) for crash
          recovery and a TCP load balancer process with separate read/write
          ports. The WAL uses binary append-only format with fsync() for
          durability and a full recovery sequence - load WAL → reconstruct log →
          replay operations → rebuild state. The load balancer routes writes
          exclusively to the primary replica via dynamic discovery, and
          distributes reads via round-robin or random policy. Benchmarked WAL
          overhead (5.5-7.8x throughput cost) and verified crash recovery
          correctness against live peers.
        </Typography>
      </Box>
    </Fade>
  );
};

export default DistributedKVStore;
