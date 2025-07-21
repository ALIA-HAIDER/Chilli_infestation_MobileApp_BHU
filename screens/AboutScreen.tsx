import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutScreen() {
  // Fix: Add proper typing to navigation
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  
  return (
    <View style={styles.container}>
      <Navbar />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        {/* Heading */}
        <View style={styles.headerCard}>
          <Text style={styles.mainTitle}>About the Project</Text>
          <Text style={styles.subtitle}>
            An interdisciplinary AI initiative by Banaras Hindu University to
            combat chilli crop losses using deep learning and real-world field
            datasets.
          </Text>
        </View>

        {/* Context Section */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <View style={styles.headerBar}></View>
            <Text style={styles.sectionTitle}>Context and Motivation</Text>
          </View>

          <View style={styles.sectionContent}>
            <Text style={styles.paragraph}>
              India, the world's largest producer of chilli, harvested 27.82 lakh tonnes in 2024–25. However, pests like Thrips parvispinus and Polyphagotarsonemus latus pose serious threats, with yield losses reaching 90–100% in eastern Uttar Pradesh.
            </Text>
            <Text style={styles.paragraph}>
              This project supports vulnerable farming communities, particularly small and marginal farmers, by offering fast and scalable disease detection tools.
            </Text>
          </View>
        </View>

        {/* Tech Intervention Section */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <View style={styles.headerBar}></View>
            <Text style={styles.sectionTitle}>Technological Intervention</Text>
          </View>

          <View style={styles.gridContainer}>
            {/* AI Models */}
            <View style={styles.gridItem}>
              <Text style={styles.gridItemTitle}>AI Models Used</Text>
              <View style={styles.bulletList}>
                <View style={styles.bulletItem}>
                  <View style={styles.bullet}></View>
                  <Text style={styles.bulletText}>ResNet Architecture</Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bullet}></View>
                  <Text style={styles.bulletText}>EfficientNet</Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bullet}></View>
                  <Text style={styles.bulletText}>DenseNet</Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bullet}></View>
                  <Text style={styles.bulletText}>ViT-B/16</Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bullet}></View>
                  <Text style={styles.bulletText}>Swin Transformer</Text>
                </View>
              </View>
            </View>

            {/* Key Features */}
            <View style={styles.gridItem}>
              <Text style={styles.gridItemTitle}>Key Features</Text>
              <View style={styles.bulletList}>
                <View style={styles.bulletItem}>
                  <View style={[styles.bullet, styles.bulletGreen]}></View>
                  <Text style={styles.bulletText}>Real BHU farm datasets</Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={[styles.bullet, styles.bulletGreen]}></View>
                  <Text style={styles.bulletText}>F1 Score evaluation</Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={[styles.bullet, styles.bulletGreen]}></View>
                  <Text style={styles.bulletText}>ROC Analysis</Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={[styles.bullet, styles.bulletGreen]}></View>
                  <Text style={styles.bulletText}>Confusion Matrix</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Field Impact */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <View style={styles.headerBar}></View>
            <Text style={styles.sectionTitle}>Field Significance</Text>
          </View>
          
          <View style={styles.highlightBox}>
            <Text style={styles.highlightText}>
              The AI tool enables farmers to detect diseases via mobile images,
              limit pesticide overuse, and apply treatments more
              efficiently—bridging the AI-lab-to-field gap.
            </Text>
          </View>
        </View>

        {/* Contributors */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <View style={styles.headerBar}></View>
            <Text style={styles.sectionTitle}>Contributors</Text>
          </View>

          <View style={styles.gridContainer}>
            {/* Left Column */}
            <View style={styles.gridItem}>
              <View style={styles.contributorCard}>
                <Text style={styles.contributorTitle}>Research Leads</Text>
                <View style={styles.bulletList}>
                  <View style={styles.bulletItem}>
                    <View style={styles.bullet}></View>
                    <Text style={styles.bulletText}>Prof. [Name], Computer Science, BHU</Text>
                  </View>
                  <View style={styles.bulletItem}>
                    <View style={styles.bullet}></View>
                    <Text style={styles.bulletText}>Prof. [Name], Agriculture, BHU</Text>
                  </View>
                </View>
              </View>

              <View style={styles.contributorCard}>
                <Text style={styles.contributorTitle}>AI Model Designers</Text>
                <View style={styles.bulletList}>
                  <View style={styles.bulletItem}>
                    <View style={styles.bullet}></View>
                    <Text style={styles.bulletText}>[Your Name], Deep Learning Lead</Text>
                  </View>
                  <View style={styles.bulletItem}>
                    <View style={styles.bullet}></View>
                    <Text style={styles.bulletText}>[Collaborator Name], Dataset & Training</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Right Column */}
            <View style={styles.gridItem}>
              <View style={styles.contributorCard}>
                <Text style={styles.contributorTitle}>Development Team</Text>
                <View style={styles.bulletList}>
                  <View style={styles.bulletItem}>
                    <View style={[styles.bullet, styles.bulletGreen]}></View>
                    <Text style={styles.bulletText}>[Intern] Frontend Developer</Text>
                  </View>
                  <View style={styles.bulletItem}>
                    <View style={[styles.bullet, styles.bulletGreen]}></View>
                    <Text style={styles.bulletText}>[Developer Name], Backend Integration</Text>
                  </View>
                  <View style={styles.bulletItem}>
                    <View style={[styles.bullet, styles.bulletGreen]}></View>
                    <Text style={styles.bulletText}>[Intern Name], Annotation & Tuning</Text>
                  </View>
                  <View style={styles.bulletItem}>
                    <View style={[styles.bullet, styles.bulletGreen]}></View>
                    <Text style={styles.bulletText}>[Intern Name], Model Monitoring</Text>
                  </View>
                </View>
              </View>

              <View style={styles.acknowledgementCard}>
                <Text style={styles.contributorTitle}>Acknowledgements</Text>
                <Text style={styles.highlightText}>
                  Thanks to the farmers of Varanasi and Mirzapur for their
                  support during dataset collection and field validation.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Call to Action */}
        <View style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Ready to Help Your Crops?</Text>
          <Text style={styles.ctaSubtitle}>
            Upload images of your chilli plants and get instant disease
            detection results.
          </Text>
          <TouchableOpacity 
            style={styles.ctaButton}
            // Fix: Add type assertion to avoid TypeScript error
            onPress={() => navigation.navigate('Scan' as never)}
          >
            <Text style={styles.ctaButtonText}>Try Disease Detection</Text>
          </TouchableOpacity>
        </View>
        
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f0',
  },
  scrollView: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  scrollContent: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  headerCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
    margin: 16,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A400C',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerBar: {
    width: 4,
    height: 24,
    backgroundColor: '#0A400C',
    borderRadius: 4,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0A400C',
  },
  sectionContent: {
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    marginBottom: 12,
    lineHeight: 24,
  },
  gridContainer: {
    flexDirection: 'column',
  },
  gridItem: {
    marginBottom: 16,
  },
  gridItemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  bulletList: {
    marginTop: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0A400C',
    marginRight: 12,
  },
  bulletGreen: {
    backgroundColor: '#0A600C',
  },
  bulletText: {
    fontSize: 15,
    color: '#444',
  },
  highlightBox: {
    backgroundColor: '#f0f7f0',
    borderLeftWidth: 4,
    borderLeftColor: '#0A400C',
    borderRadius: 8,
    padding: 16,
  },
  highlightText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  contributorCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  contributorTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0A400C',
    marginBottom: 12,
  },
  acknowledgementCard: {
    backgroundColor: '#f0f7f0',
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#0A400C',
  },
  ctaCard: {
    backgroundColor: '#0A400C',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    alignItems: 'center',
    margin: 16,
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0A400C',
  },
});